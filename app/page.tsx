import { columns, Payment } from "-/components/payments/columns";
import { DataTable } from "-/components/payments/data-table";
import { PersonDataTable } from "-/components/person-data-table";
async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "724ed52f",
      amount: 200,
      status: "pending",
      email: "a@example.com",
    },
    {
      id: "721ed52sfsdf",
      amount: 530,
      status: "failed",
      email: "gj@example.com",
    },
    {
      id: "721sdfsd",
      amount: 100,
      status: "success",
      email: "Dj@example.com",
    },
    {
      id: "721edsfsdfs52f",
      amount: 600,
      status: "failed",
      email: "MJ@example.com",
    },
    {
      id: "72sfsed52f",
      amount: 100,
      status: "processing",
      email: "KD@example.com",
    },
    {
      id: "721edsfsdfs52f",
      amount: 600,
      status: "failed",
      email: "MJ@example.com",
    },
    {
      id: "72sfsed52f",
      amount: 100,
      status: "processing",
      email: "KD@example.com",
    },
    {
      id: "721edsfsdfs52f",
      amount: 600,
      status: "failed",
      email: "MJ@example.com",
    },
    {
      id: "72sfsed52f",
      amount: 100,
      status: "processing",
      email: "KD@example.com",
    },
  ];
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="w-full max-w-3xl mx-auto p-10">
      <h1 className="text-2xl text-center border-b">
        CSV Style Editable Table
      </h1>
      <DataTable columns={columns} data={data} />
      <PersonDataTable />
    </main>
  );
}
