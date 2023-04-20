import ClientController from "@/components/ClientController";
import ClientOnly from "@/components/ClientOnly";

export default function Home() {
  return (
    <ClientOnly>
      <ClientController />
    </ClientOnly>
  );
}
