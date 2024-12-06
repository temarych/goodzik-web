import { BaseGuideSettingsType } from './baseGuideSettingsType';

interface Props {
  setBaseGuideSettings: React.Dispatch<
    React.SetStateAction<BaseGuideSettingsType>
  >;
}

const BaseGuideSettings = ({ setBaseGuideSettings }: Props) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBaseGuideSettings((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBaseGuideSettings((prev) => {
      return {
        ...prev,
        description: e.target.value,
      };
    });
  };

  const handleVideoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBaseGuideSettings((prev) => {
      return {
        ...prev,
        videoUrl: e.target.value,
      };
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-4 items-center">
        <p className="min-w-[157px]">Назва:</p>
        <input
          type="text"
          className="px-2 border-2 border-gray-400/80 rounded-lg"
          onChange={handleTitleChange}
        />
      </div>

      <div className="flex flex-row gap-4 items-center">
        <p className="min-w-[157px]">Опис:</p>
        <input
          type="text"
          className="px-2 border-2 border-gray-400/80 rounded-lg"
          onChange={handleDescriptionChange}
        />
      </div>

      <div className="flex flex-row gap-4 items-center">
        <p className="min-w-[157px]">Посилання на відео:</p>
        <input
          type="text"
          className="px-2 border-2 border-gray-400/80 rounded-lg"
          onChange={handleVideoUrlChange}
        />
      </div>
    </div>
  );
};

export default BaseGuideSettings;
