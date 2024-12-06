interface Props {
  index: number;
  setText: (index: number, text: string) => void;
  setPhoto: (index: number, photoFile: File) => void;
}

const GuideStep = ({ index, setText, setPhoto }: Props) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setText(index, text);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const photoFile = e.target.files![0];
    setPhoto(index, photoFile);
  };

  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <div className="w-1/2">
          <p className="text-xl">Крок {index + 1}:</p>
        </div>
        <div className="w-16">
          <label htmlFor="post-image-input">
            <input
              id="post-image-input"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
            <img
              src="https://img.icons8.com/ios/100/attach.png"
              alt="#"
              className="w-[36px] m-auto cursor-pointer"
            />
          </label>
        </div>
        <textarea
          name={'guide-text-' + index}
          id={'guide-text-' + index}
          defaultValue={''}
          onChange={handleTextChange}
          className="p-1 resize-none border-2 border-gray-400/80 rounded-lg w-full h-20"
        />
      </div>
    </div>
  );
};

export default GuideStep;
