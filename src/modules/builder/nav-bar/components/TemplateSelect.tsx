import { styled, alpha } from '@mui/material';
import Link from '@mui/material/Link';
import { TemplateSlider } from './TemplatesSlider';

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.resume[800],
  borderColor: theme.palette.resume[100],
  ':hover': {
    borderColor: theme.palette.resume[800],
    backgroundColor: alpha(theme.palette.resume[800], 0.04),
  },
}));

export const TemplateSelect = () => {
  return (
    <div className="md:w-[600px] bg-white">
      <TemplateSlider />
    </div>
  );
};
