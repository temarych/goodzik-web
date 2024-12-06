import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useCreateTeamMemberMutation } from '@store/api';

export const TeamPage = () => {
  const [createTeamMember] = useCreateTeamMemberMutation();

  const onSubmit = async (data: {
    fullName: string;
    imageUrl: string;
    position: string;
  }) => {
    try {
      await createTeamMember({
        createTeamMemberDto: {
          fullName: data.fullName,
          imageUrl: data.imageUrl,
          position: data.position,
        },
      });

      reset();
    } catch (error) {
      console.error('Failed to create team member:', error);
    }
  };

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: '',
      imageUrl: '',
      position: '',
    },
  });

  return (
    <div>
      <p className="text-xl font-bold mb-4">Новий член команди:</p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-4 max-w-md">
          <label htmlFor="fullName" className="w-24">
            Повне ім'я
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Повне ім'я"
            className="px-2 border-2 border-gray-400/80 rounded-lg"
            {...register('fullName')}
          />
        </div>
        <div className="flex flex-row gap-4 max-w-md">
          <label htmlFor="imageUrl" className="w-24">
            URL-адреса зображення
          </label>
          <input
            id="imageUrl"
            type="text"
            placeholder="URL-адреса"
            className="px-2 border-2 border-gray-400/80 rounded-lg"
            {...register('imageUrl')}
          />
        </div>
        <div className="flex flex-row gap-4 max-w-md">
          <label htmlFor="position" className="w-24">
            Розташування
          </label>
          <input
            id="position"
            type="text"
            placeholder="Розташування"
            className="px-2 border-2 border-gray-400/80 rounded-lg"
            {...register('position')}
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
