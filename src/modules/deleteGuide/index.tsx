import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDeleteGuideMutation } from '@store/api';

export const DeleteGuidePage = () => {
  const [deleteGuide] = useDeleteGuideMutation();
  //   const [getGuides] = useGetGuidesQuery();

  const onSubmit = async (data: { id: string }) => {
    try {
      deleteGuide({ id: data.id });
      reset();
    } catch (error) {
      console.error('Failed to create team member:', error);
    }
  };

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: '',
    },
  });

  return (
    <div>
      <p className="text-xl font-bold mb-4">Видалити гайд:</p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-4 max-w-md">
          <label htmlFor="position" className="w-24">
            ID
          </label>
          <input
            id="id"
            type="text"
            placeholder="ID"
            className="px-2 border-2 border-gray-400/80 rounded-lg"
            {...register('id')}
          />
        </div>
        <div>
          <Button variant="contained" type="submit">
            Зберегти
          </Button>
        </div>
      </form>
    </div>
  );
};
