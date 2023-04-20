import BodyContent from "@/components/BodyContent";
import ClientOnly from "@/components/ClientOnly";
import SmallHeader from "@/components/Contents/SmallHeader";

type Props = {};

function RepositoryPage({}: Props) {
  return (
    <ClientOnly>
      <SmallHeader />
      <BodyContent />
    </ClientOnly>
  );
}

export default RepositoryPage;
