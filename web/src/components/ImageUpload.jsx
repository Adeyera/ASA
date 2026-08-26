import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function ImageUpload({ onUpload, currentUrl }) {
  const [preview, setPreview] = useState(currentUrl || '');
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);

  const handleFile = async (file) => {
    if (!file) return;

    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];
    if (!allowed.includes(file.type)) {
      alert('Only JPEG, PNG, WebP, and AVIF images are allowed');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('File too large — max 10MB');
      return;
    }

    setPreview(URL.createObjectURL(file));
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const token = localStorage.getItem('token');
      const { data } = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      onUpload(data.url);
    } catch (err) {
      alert('Upload failed');
      setPreview('');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  return (
    <div
      className={`image-upload ${dragOver ? 'drag-over' : ''}`}
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif"
        onChange={handleChange}
        hidden
      />

      {uploading ? (
        <div className="upload-status">
          <span className="upload-spinner" />
          <p>Uploading...</p>
        </div>
      ) : preview ? (
        <div className="upload-preview">
          <img src={preview} alt="Preview" />
          <button
            className="upload-change"
            onClick={(e) => {
              e.stopPropagation();
              setPreview('');
              onUpload('');
            }}
          >
            Remove
          </button>
        </div>
      ) : (
        <div className="upload-placeholder">
          <span className="upload-icon">+</span>
          <p>Click or drag an image here</p>
          <span className="upload-hint">JPEG, PNG, WebP, AVIF — max 10MB</span>
        </div>
      )}

      <style>{`
        .image-upload {
          border: 2px dashed var(--color-border);
          border-radius: var(--radius-md);
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-upload:hover,
        .image-upload.drag-over {
          border-color: var(--color-accent);
          background: rgba(212, 168, 83, 0.05);
        }

        .upload-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--color-text-muted);
        }

        .upload-icon {
          font-size: 2.5rem;
          color: var(--color-accent);
          font-weight: 300;
          line-height: 1;
        }

        .upload-hint {
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }

        .upload-preview {
          position: relative;
          width: 100%;
        }

        .upload-preview img {
          width: 100%;
          max-height: 300px;
          object-fit: contain;
          border-radius: var(--radius-sm);
        }

        .upload-change {
          position: absolute;
          top: 8px;
          right: 8px;
          padding: 6px 14px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          transition: background var(--transition-fast);
        }

        .upload-change:hover {
          background: var(--color-error);
        }

        .upload-status {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: var(--color-text-secondary);
        }

        .upload-spinner {
          width: 32px;
          height: 32px;
          border: 3px solid var(--color-border);
          border-top-color: var(--color-accent);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
