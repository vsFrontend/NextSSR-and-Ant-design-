import { useRouter } from "next/router";
import ContainerDashBoard from "~/components/layouts/ContainerDashboard";
import { Avatar, Card, Spin } from "antd";
import Meta from "antd/lib/card/Meta";
import styles from './todo.module.css' 

function index({ data = {} }) {
  const router = useRouter();

  return (
    <ContainerDashBoard title={data.userId ? data.title : "Loading..."}>
      <h2>TODO's Page</h2>
      <div>
        {router.isFallback && <Spin />}
        <Card className={styles.cardContainer} loading={router.isFallback}>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="TODO"
            description={data.title}
          />
        </Card>
      </div>
    </ContainerDashBoard>
  );
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${params.tid}`
    );
    const data = await res.json();

    if (!data.id) {
      return {
        redirect: {
          destination: "/404",
        },
      };
    }

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
        data: {},
        error: "No Data Found",
      },
      revalidate: 30,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default index;
