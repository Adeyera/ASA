const PAYSTACK_API = 'https://api.paystack.co';

const paystackHeaders = () => ({
  Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
  'Content-Type': 'application/json',
});

const initializePayment = async (email, amount, metadata = {}) => {
  const response = await fetch(`${PAYSTACK_API}/transaction/initialize`, {
    method: 'POST',
    headers: paystackHeaders(),
    body: JSON.stringify({
      email,
      amount: Math.round(amount * 100),
      metadata,
    }),
  });
  return response.json();
};

const verifyPayment = async (reference) => {
  const response = await fetch(
    `${PAYSTACK_API}/transaction/verify/${reference}`,
    { headers: paystackHeaders() }
  );
  return response.json();
};

module.exports = { initializePayment, verifyPayment };
