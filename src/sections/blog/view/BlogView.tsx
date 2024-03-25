import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import Iconify from "components/Iconify";

import { NOTIFICATION } from "constant/router";
import type { NotificationModel } from "models/view/notification";
import { useEffect, useState } from "react";
import { RouterLink } from "routes/components";
import { NotificationService } from "services/notification";
import PostCard from "../PostCard";
import { useTranslation } from "react-i18next";

// ----------------------------------------------------------------------

export default function BlogView() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<NotificationModel[]>([]);
  const getNotification = async () => {
    try {
      const data = await NotificationService.getList();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotification();
  }, []);

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">{t("blog.info.title")}</Typography>

        <RouterLink href={NOTIFICATION}>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            {t("blog.button.newPost")}
          </Button>
        </RouterLink>
      </Stack>

      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </Grid>
    </Container>
  );
}
