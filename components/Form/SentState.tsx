export interface Location {
  title: string;
  text: string;
}

export interface Props {
  sentTitle: string;

  sentText: string;

  locationInfo: Location[];
}

export default function SentState({
  sentTitle,
  sentText,
  locationInfo,
}: Props) {
  return (
    <div class="flex flex-col gap-8">
      <h2 class="text-6xl playfair italic" dangerouslySetInnerHTML={{ __html: sentTitle }} />
      <p class="text-lg" dangerouslySetInnerHTML={{ __html: sentText }} />
      <div class="flex flex-col gap-3 border-y border-[#949E9E] py-8">
        {locationInfo.map((location) => (
          <div class="flex flex-col gap-1">
            <span class="text-[#27AE6B] txt-xl font-bold">{location.title}</span>
            <p class="text-lg">{location.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
