"use client";

export default function Dashboard() {
  const pay = async () => {
    const res = await fetch("/api/create-order", { method: "POST" });
    const order = await res.json();

    const rzp = new (window as any).Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      order_id: order.id,
      handler: () => alert("Payment success"),
    });

    rzp.open();
  };

  return (
    <div className="p-10">
      <button onClick={pay}>Pay</button>
    </div>
  );
}
