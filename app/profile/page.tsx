import ClientOnly from "@/components/ClientOnly";
import ProfileContent from "@/components/profile/ProfileContent";

type Props = {};

function ProfilePage({}: Props) {
  return (
    <ClientOnly>
      <ProfileContent />
    </ClientOnly>
  );
}

export default ProfilePage;
