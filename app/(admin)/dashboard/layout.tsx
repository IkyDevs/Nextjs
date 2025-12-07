export default function LayoutPage({
  children,
  product,
  analitycs,
  statics,
  payments
}: {
  children: React.ReactNode;
  product: React.ReactNode;
  analitycs: React.ReactNode;
  statics: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div className="gap-10 flex mt-10">
        {analitycs}
        {statics}
      </div>
      <div className="gap-10 flex mt-10">
        {product}
        {payments}
      </div>
    </>
  );
}
