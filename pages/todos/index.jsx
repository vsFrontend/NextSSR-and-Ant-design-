import { Table, Tag, Space } from "antd";
import ContainerDashBoard from "~/components/layouts/ContainerDashboard";
import Link from "next/link";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    render: (_, record) => {
      return (
        <Link href={`/todos/${record.id}`}>
          <a>{record.id}</a>
        </Link>
      );
    },
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Status",
    dataIndex: "completed",
    render: (tags, record) => {
      return (
        <>
          {record.completed ? (
            <Tag color="green">Completed</Tag>
          ) : (
            <Tag color="orange">In-Completed</Tag>
          )}
        </>
      );
    },
  },
];

function index({ data }) {
  return (
    <ContainerDashBoard title="Todo's">
      <h2>ToDo's Page</h2>
      <Table dataSource={data} columns={columns} />
    </ContainerDashBoard>
  );
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return {
      props: {
        data,
        error: null,
      },
      revalidate: 30,
    };
  } catch (error) {
    return {
      props: {
        data: [],
        error: "No Data Found",
      },
      revalidate: 30,
    };
  }
}

export default index;
