import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

export const LocationPage = () => {
  //   const [createTeamMember] = useCreateTeamMemberMutation();

  const onSubmit = async () => {
    try {
      //   await createTeamMember({
      // createTeamMemberDto: {
      //   fullName: data.fullName,
      // },
      //   });
      reset();
    } catch (error) {
      console.error('Failed to create team member:', error);
    }
  };

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      newLocation: '',
    },
  });

  return (
    <div>
      <p className="text-xl font-bold mb-4">Змінити локацію:</p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-4 max-w-md">
          <label htmlFor="position" className="w-24">
            Розташування
          </label>
          <input
            id="position"
            type="text"
            placeholder="Розташування"
            className="px-2 border-2 border-gray-400/80 rounded-lg"
            {...register('newLocation')}
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
