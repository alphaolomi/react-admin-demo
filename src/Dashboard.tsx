// in src/Dashboard.tsx
// import { Card, CardContent,  } from "@mui/material";
import { Card, CardContent, CardHeader, Typography, Grid } from "@mui/material";

const activeUsers = 10;
const totalUsers = 100;
const totalPosts = 1000;
const publishedPosts = 100;

export const Dashboard = () => (
  <>
    <Card style={{ marginTop: 20 }}>
      <CardHeader title="Welcome" />
      <CardContent>Manage your users and posts here</CardContent>
    </Card>
    <Grid container spacing={2} mt={3}>
      <Grid item xs={12} md={6} lg={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">Active Users</Typography>
            <Typography variant="h4">{activeUsers}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">Total Users</Typography>
            <Typography variant="h4">{totalUsers}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">Total Posts</Typography>
            <Typography variant="h4">{totalPosts}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">Published Posts</Typography>
            <Typography variant="h4">{publishedPosts}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </>
);
