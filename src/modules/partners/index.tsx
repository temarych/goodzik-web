import { Button } from '@mui/material';
import { useCreatePartnerMutation } from '@store/api';
import { useForm } from 'react-hook-form';

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
    } catch (error) {
      console.error('Failed to create partner:', error);
    }
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      type: '',
      description: '',
    },
  });

  return (
    <div>
      <p className="text-xl font-bold mb-4">Новий партнер:</p>

      <form className="flex flex-col gap-4" onClick={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-4 max-w-md">
          <label htmlFor="name" className="w-24">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
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
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};
