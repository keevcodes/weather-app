type Props = {
  hightlightText: string;
  hightlightValue: string;
  icon: React.ReactNode;
};

export const WeatherHighlight = (props: Props) => (
  <>
    {props.icon}
    <span className="text-sm text-white text-muted-foreground font-inter font-bold">
      {props.hightlightText}
    </span>
    <span className="text-xs text-white font-inter">
      {props.hightlightValue}
    </span>
  </>
);
