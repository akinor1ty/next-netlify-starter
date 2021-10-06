import { useRouter } from "next/router";

const Orgs = () => {
  const router = useRouter();
  const { id } = router.query;

  return <>{`Org: ${id}`}</>;
};

export default Orgs;
