interface DashboardProps {
  children: React.ReactNode;
  grafik: React.ReactNode;
  review: React.ReactNode;
}

export default function dashboardLayout({ children, grafik, review }: DashboardProps) {
  return (
    <>
      <div>{children}</div>
      <div>{grafik}</div>
      <div>{review}</div>
    </>
  );
}
