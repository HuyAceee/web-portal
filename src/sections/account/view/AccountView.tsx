import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import { CHANGE_PASSWORD_PAGE } from "constant/router";
import { useTranslation } from "react-i18next";
import { RouterLink } from "routes/components";
import { AccountDetailsForm } from "sections/account/AccountDetailsForm";
import { AccountInfo } from "sections/account/AccountInfo";

export default function ProfileView(): React.JSX.Element {
  const { t } = useTranslation();
  return (
    <Stack spacing={3}>
      <Grid container justifyContent="space-between" spacing={3}>
        <Typography variant="h4">{t("profile.info.title")}</Typography>
        <RouterLink href={CHANGE_PASSWORD_PAGE}>
          <Button variant="contained">
            {t("profile.action.changePassword")}
          </Button>
        </RouterLink>
      </Grid>
      <Grid container spacing={3}>
        <Grid lg={4} md={6} xs={12}>
          <AccountInfo />
        </Grid>
        <Grid lg={8} md={6} xs={12}>
          <AccountDetailsForm />
        </Grid>
      </Grid>
    </Stack>
  );
}
