import { useContext } from 'react';
import {AuthContext} from '../Context/AuthContext';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function User(){
    const [{handleSignOut}] = useContext(AuthContext);



    return (
        <div>
        User Details
        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
      <CardActionArea>
        <CardMedia
          component="img"
         
          image="https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.6435-9/190807634_3089582341328499_5184554839191977391_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=Dr8gzNk1ksgAX_gKvG6&_nc_ht=scontent.fbbi1-2.fna&oh=00_AT8dN0Buop5ehK50UbrEcWFlRKe27nf3RlN5fc6uavpP7w&oe=61FF2C49"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Satyabrata Das
          </Typography>
          <Typography variant="body2" color="text.secondary">
           I am a full-stuck web developer
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div>
    <Button size="medium" onClick={handleSignOut}>Sign Out</Button>
    </div>
        </div>

    )
}