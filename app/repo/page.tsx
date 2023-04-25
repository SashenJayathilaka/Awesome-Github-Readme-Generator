import BodyContent from "@/components/BodyContent";
import ClientOnly from "@/components/ClientOnly";

type Props = {};

function RepositoryPage({}: Props) {
  return (
    <ClientOnly>
      <BodyContent />
    </ClientOnly>
  );
}

export default RepositoryPage;
