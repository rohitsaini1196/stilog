import React, {useState, useEffect} from 'react'
import {Typography, Button, ListItem, ListItemAvatar, ListItemSecondaryAction, IconButton, List, ListItemText,Avatar, Container} from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder'
import DeleteIcon from '@material-ui/icons/Delete'

function Category() {
    const [categories, setCategories] = useState([
        {
            name:'Film & Animation',
            id: 'ggwp',
            link: 'ggwp'
        },
        {
            name:'Autos & Vehicles',
            id: 'ggwp',
            link: 'ggwp'
        },
        {
            name:'Music',
            id: 'ggwp',
            link: 'ggwp'
        },
        {
            name:'Pets & Animals',
            id: 'ggwp',
            link: 'ggwp'
        },
        {
            name:'Sports',
            id: 'ggwp',
            link: 'ggwp'
        },
        {
            name:'Travel & Events',
            id: 'ggwp',
            link: 'ggwp'
        },
        {
            name:'Gaming',
            id: 'ggwp',
            link: 'ggwp'
        },
        {
            name:'People & Blogs',
            id: 'ggwp',
            link: 'ggwp'
        },
        {
            name:'Comedy',
            id: 'ggwp',
            link: 'ggwp'
        },
        {
            name:'Entertainment',
            id: 'ggwp',
            link: 'ggwp'
        },
        {
            name:'News & Politics',
            id: 'ggwp',
            link: 'ggwp'
        },
        {
            name:'Howto & Style',
            id: 'ggwp',
            link: 'ggwp'
        },
        {
            name:'Education',
            id: 'ggwp',
            link: 'ggwp'
        },
        {
            name:'Science & Technology',
            id: 'ggwp',
            link: 'ggwp'
        },
        {
            name:'Nonprofits & Activism',
            id: 'ggwp',
            link: 'ggwp'
        }
        
    ])
    return (
        <div>
            <div>
                
              
                <div>
                    <Container>
                    <Typography variant="h5" style={{textAlign:'center', margin:'10px'}}>Categories</Typography>
                <Typography variant="subtitle2">Discover more of what matters to you</Typography>
                    <List dense={true}>
                        {
                        categories.map((cate, i)=>(
                            <ListItem key={i}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={cate.name}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))
                        }
                    </List>
                    </Container>


                    {/* {
                    categories.map((cate, i)=>(
                        <div style={{textAlign:'end'}} key={i}>
                            <Button  variant="outlined" size="small" style={{margin:'7px 4px', textTransform:'none'}}>{cate.name}</Button>
                            <br></br>
                        </div>
                    ))
                    } */}
                </div>


            </div>
        </div>
    )
}

export default Category
