import { useEffect, useState } from 'react';
import GuideStep from './GuideStep';

//! add adding video url for entire guide

const NewGuideForm = () => {
  const [stepElements, setStepElements] = useState<JSX.Element[]>([]);
  const [guideTexts, setGuideTexts] = useState<string[]>([]);

  const addNewStep = () => {
    setStepElements([
      ...stepElements,
      <GuideStep setText={handleSetText} index={stepElements.length + 1} />,
    ]);
  };

  const handleSetText = (index: number, text: string) => {
    const newGuideTexts = guideTexts;
    newGuideTexts[index] = text;

    setGuideTexts(newGuideTexts);
  };

  const handleSubmit = () => {
    console.log(guideTexts);
  };

  useEffect(() => {
    setStepElements([<GuideStep setText={handleSetText} index={1} />]);
  }, []);

  return (
    <div className="flex flex-col gap-6 w-1/2">
      <p className="text-xl font-bold">Новий гайд:</p>
      <div className="flex flex-col gap-8">
        {stepElements.map((step) => step)}
        <div className="flex flex-row gap-4 justify-center">
          <button
            className="w-32 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={addNewStep}
          >
            Add step
          </button>
          <button
            className="w-32 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleSubmit}
          >
            Save guide
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
exampleImages string[]
description string

title for лекала
лекала string[]

*/
