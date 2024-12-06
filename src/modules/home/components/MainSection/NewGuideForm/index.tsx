import React, { useEffect, useState } from 'react';
import GuideStep from './GuideStep';
import BaseGuideSettings from './BaseGuideSettings';
import { BaseGuideSettingsType } from './baseGuideSettingsType';
// import { useCreateGuideMutation } from '@store/api';

//! add adding video url for entire guide

const NewGuideForm = () => {
  const [stepElements, setStepElements] = useState<JSX.Element[]>([]);
  const [guideTexts, setGuideTexts] = useState<string[]>([]);
  const [guidePhotos, setGuidePhotos] = useState<(File | null)[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [baseGuideSettings, setBaseGuideSettings] =
    useState<BaseGuideSettingsType>({
      title: '',
      description: '',
      videoUrl: '',
    });

  //   const [createGuide] = useCreateGuideMutation();

  const addNewStep = () => {
    setStepElements([
      ...stepElements,
      <GuideStep
        setText={handleSetText}
        setPhoto={handleSetPhoto}
        index={stepElements.length}
      />,
    ]);
    setGuideTexts([...guideTexts, '']);
    setGuidePhotos([...guidePhotos, null]);
  };

  const handleSetText = (index: number, text: string) => {
    setGuideTexts((prev) => {
      prev[index] = text;
      return prev;
    });
  };

  const handleSetPhoto = (index: number, photoFile: File) => {
    setGuidePhotos((prev) => {
      prev[index] = photoFile;
      return prev;
    });
  };

  const validateFieldData = () => {
    console.log(baseGuideSettings);
    console.log(guideTexts);
    console.log(guidePhotos);

    if (!baseGuideSettings?.title || !baseGuideSettings?.description) {
      setError('Не всі базові налаштування не вказані');
    } else if (guideTexts.some((text) => !text)) {
      setError('Якесь поле порожнє');
    } else {
      setError(null);
      sendGuideToServer().then(console.log);
    }
  };

  const storeAllImages = async () => {
    // await guidePhotos.forEach(async (photo) => {
    //     await
    // });
  };

  const sendGuideToServer = async () => {
    await storeAllImages();

    // const steps = guideTexts.map((text, index) => ({
    //   name: 'Крок' + (index + 1),
    //   description: text,
    //   image: guidePhotos[index]!,
    //   order: index,
    // }));

    // const createGuideDto = {
    //   ...baseGuideSettings,
    //   categories: [],
    //   imageUrl: '', //!
    //   steps,
    // };

    // createGuide({ createGuideDto })
    //   .unwrap()
    //   .then((res) => console.log(res));
  };

  //   export type CreateGuideDto = {
  //     title: string;
  //     description: string;
  //     imageUrl: string;
  //     videoUrl: string;
  //     categories: string[];
  //     steps: CreateGuideStepDto[];
  //   };

  // name: string;
  // description: string;
  // image: string;
  // order: number;

  useEffect(() => {
    setStepElements([
      <GuideStep setText={handleSetText} setPhoto={handleSetPhoto} index={0} />,
    ]);
    setGuideTexts(['']);
    setGuidePhotos([null]);
  }, []);

  return (
    <div className="flex flex-col gap-8 w-1/2">
      <div className="flex flex-row justify-between">
        <p className="text-xl font-bold">Новий гайд:</p>
        <p className="text-red-600">{error}</p>
      </div>

      <BaseGuideSettings setBaseGuideSettings={setBaseGuideSettings} />

      <div className="flex flex-col gap-8">
        {stepElements.map((step, index) => (
          <React.Fragment key={index}>{step}</React.Fragment>
        ))}
        <div className="flex flex-row gap-4 justify-center">
          <button
            className="min-w-32 h-12 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={addNewStep}
          >
            Додати гайд
          </button>
          <button
            className="w-fit h-12 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={validateFieldData}
          >
            Зберегти гайд
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewGuideForm;

/*

title string
videoUrl string
description string
exampleImages string[]

title for лекала
лекала string[]

*/
