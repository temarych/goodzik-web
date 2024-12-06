interface Props {
  index: number;
  setText: (index: number, text: string) => void;
}

const GuideStep = ({ index, setText }: Props) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setText(index, text);
  };

  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <div className="w-1/2">
          <p className="text-xl">Step {index}:</p>
        </div>
        <div className="w-16">
          <img
            src="https://img.icons8.com/ios/100/attach.png"
            alt="#"
            className="w-[36px] m-auto"
          />
        </div>
        <textarea
          name={'guide-text-' + index}
          id={'guide-text-' + index}
          onChange={handleTextChange}
          className="p-1 resize-none border-2 border-gray-400/80 rounded-lg w-full h-20"
        />
      </div>
    </div>
  );
};

export default GuideStep;
