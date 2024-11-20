"use client";
import { PageTitle } from "@/components/common/page_title";
import Spinner from "@/components/common/spinner";
import { GameEvent } from "@/components/gameui/game_event";
import { UseEvent } from "@/hooks/common/use_event";
import { useClientSession } from "@/hooks/custom/use_session";

export default function Started() {
  const user = useClientSession("default") as any;
  const { data, isLoading, isError } = UseEvent();

  return (
    <>
      <main className="flex  h-full w-full">
        <section className="w-full h-full rounded-sm p-4 bg-gray-100 mb-4 overflow-y-auto ">
          <PageTitle title="Events" />
          <p className="font-semibold">Click on Event to start game</p>
          <section className="h-fit w-full grid grid-rows space-y-4 justify-center py-3 ">
            {isLoading ? (
              <div className="flex justify-center items-center w-full">
                <Spinner />
              </div>
            ) : isError ? (
              <div>Error...</div>
            ) : data.length > 0 ? (
              data.map((event: any) => (
                <GameEvent
                  {...event}
                  eventId={event.id}
                  attemptsLeft={event.campaign?.numOfAttempts}
                  duration={event.campaign?.duration}
                  passScore={event.campaign?.passScore}
                  key={event?.id}
                />
              ))
            ) : (
              <div className="text-lg font-semibold items-center mt-10">
                No event available...
              </div>
            )}
          </section>
        </section>
        <section className="h-full w-full flex flex-col items-center justify-center bg-white px-10">
          <div>
            <p className="text-3xl font-bold text-stone-700">{`${user?.firstName ?? ""} ${
              user?.lastName ?? ""
            }`}</p>
            <p className="text-2xl font-semibold text-stone-700">{user?.email}</p>
            <p className="text-2xl font-semibold text-stone-700">{user?.educationalLevel}</p>
          </div>
        </section>
      </main>
    </>
  );
}
