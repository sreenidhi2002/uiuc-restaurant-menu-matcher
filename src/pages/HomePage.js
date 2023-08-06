import AppHeader from '../assets/AppHeader.js';

import React, { useState } from "react"
import { Grid, ImageList, ImageListItem, ImageListItemBar, 
    TextField} from "@mui/material";
import { styled } from '@mui/material/styles';

import RestaurantData from '../assets/c_u_best_match.json'
import { Link } from "react-router-dom"

const CenteredGrid = styled(Grid) ({
    justifyContent: "center",
    alignItems: "center",
    containerSpacing: 0,
    textAlign: "center",
    display: "flex",
})

export default function HomePage (){
    
    const [query, setQuery] = useState('')
    const [result, setResult] = useState([])

    const handleSearchChange = (e) => {
        let data = RestaurantData 
        const results = data.businesses.filter(b => {
            if (e.target.value === ""){
                return ""
            }
            if (b.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                return b.name
            }
            return ""
        })
        setQuery(e.target.value);
        setResult(results)
    }

    const searchField = (
        <TextField id="outlined-white" 
            label="Search Restaurant" 
            variant="standard"
            onChange={handleSearchChange}
            value={query}
            sx={{width:500, my:2, 
                input: {color: 'white', fontFamily: 'Poppins'},
                label: {color: 'white', fontFamily: 'Poppins'},
            }}
        /> 
    )

    const searchResults = (
        <ImageList sx={{ width: 800, height: 500, backgroundColor: '#6293CC', padding: 4, borderRadius: 10, margin: 4}} cols={3} rowHeight={300}>
        {result.map(b => (
            ((
                <Link to = {"/detail-view/" + b.name.replace(" ", "%20")}>
                    <ImageListItem sx={{
                        margin: 2,
                        height: 300,
                        
                    }}>
                        <img className="listviewimg"
                            src={`${b.image_url}?w=16&h=16&fit=crop`}
                            loading="lazy"
                            alt="listviewimage" 
                        />
                        <ImageListItemBar 
                            sx={{
                                fontFamily: 'Poppins',
                                borderBottomLeftRadius: 10, 
                                borderBottomRightRadius: 10
                            }}
                            title={b.name}
                            subtitle={
                                <div>
                                    <p>
                                    {b.location.address1} {b.location.address2} {b.location.address3} {b.location.city} {b.location.zip_code}
                                    </p>
                                </div>
                            }
                                
                        />
                    </ImageListItem>
                </Link>
        ))))}
        </ImageList>
    )

    return (
        <main>
            <AppHeader/>
            <div className="UserProfilePage">
                <h1>Welcome to UIUC Menu Matcher</h1>
                <div className="Content-box">
                    {searchField}
                </div>
                <CenteredGrid>
                    {searchResults}
                </CenteredGrid>
            </div>
        </main>
    );
}