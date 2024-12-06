import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useCreatePartnerMutation } from '@store/api';

export const PartnersPage = () => {
  const [createPartner] = useCreatePartnerMutation();

  const onSubmit = async (data: {
    name: string;
    type: string;
    description: string;
  }) => {
    try {
      await createPartner({
        createPartnerDto: {
          name: data.name,
        },
      });

      reset();
    } catch (error) {
      console.error('Failed to create partner:', error);
    }
  };

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      type: '',
      description: '',
    },
  });

  return (
    <div>
      <p className="text-xl font-bold mb-4">Новий партнер:</p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-4 max-w-md">
          <label htmlFor="name" className="w-24">
            Повне ім'я
          </label>
          <input
            id="name"
            type="text"
            placeholder="Повне ім'я"
            className="px-2 border-2 border-gray-400/80 rounded-lg"
            {...register('name')}
          />
        </div>
        <div className="flex flex-row gap-4 max-w-md">
          <label htmlFor="type" className="w-24">
            Type
          </label>
          <input
            id="type"
            type="text"
            placeholder="Type"
            className="px-2 border-2 border-gray-400/80 rounded-lg"
            {...register('type')}
          />
        </div>
        <div className="flex flex-row gap-4 max-w-md">
          <label htmlFor="description" className="w-24">
            Description
          </label>
          <input
            id="description"
            type="text"
            placeholder="Description"
            className="px-2 border-2 border-gray-400/80 rounded-lg"
            {...register('description')}
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
