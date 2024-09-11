import LiveSwither from "@/components/liveSwither";

export default async function YouTubePage() {
  try {



    return (
      <div>
        {/* switcher */}
        <LiveSwither />
      </div>

    );
  } catch (error) {
    // console.error('Error rendering YouTube page:', error);
    return <div>Error fetching YouTube data</div>;
  }
}
