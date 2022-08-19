import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../services/base";

interface IPublication {
  id: string
  title: string
  description: string
  pet_name: string
  gender: string
  disappearance_date: string
  image_url: [
    {
      id: string,
      image_url: string
    }
  ]
  last_location: {
    type: string
    coordinates: [number, number]
  }
  user_id: string
}

interface IPublicationView {
  id: string
  title: string
  description: string
  pet_name: string
  gender: string
  disappearance_date: string
  image_url: [
    {
      id: string,
      image_url: string
    }
  ]
  last_location: {
    type: string
    coordinates: [number, number]
  }
  user_id: {
    id: string
    name: string
    phone: string
  }
  comments: []
  created_at: string
}

interface IGetPublication {
  id: string | undefined
}

interface IPublicationResponse {
  count: number
  publications: IPublication[]
}  

interface ICreatePublication {
  title: string
  description: string
  pet_name: string
  gender: string
  disappearance_date: string
  publication_image: any
  last_location: [number, number]
  token: string
  status?: string
  msg?: string
}

interface IStatePublication {
  createPublication: ICreatePublication
  publications: IPublicationResponse
  viewPublication: IPublicationView | null
}


const initialState: IStatePublication = {
    createPublication: {
    title: '',
    description: '',
    pet_name: '',
    gender: '',
    disappearance_date: '',
    publication_image: null,
    last_location: [0, 0],
    token: '',
    status: '',
    msg: '',
  },
  publications: {
    count: 0,
    publications: []
  },
  viewPublication: null
}

export const publication = createAsyncThunk('publication/',
  async ({title, description, pet_name, gender, disappearance_date, publication_image,
  last_location, token}: ICreatePublication, {rejectWithValue}) => {
    const location = `[${last_location}]`
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('pet_name', pet_name)
    formData.append('gender', gender)
    formData.append('disappearance_date', disappearance_date)
    formData.append('publication_image', publication_image)
    formData.append('last_location', location)
    try{
      const response = await api.post("/publications", formData, {
        headers: {
          Authorization: "Bearer " + token,
          'Content-Type': 'multipart/form-data'
        }
      })
      return response.data
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const getPublications = createAsyncThunk('getPublication/', async (_, {rejectWithValue}) => {
  try{
    const response = await api.get("/publications")
    return response.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const getPublication = createAsyncThunk('getPublication/id', async ({id}: IGetPublication, {rejectWithValue}) => {
  try{
    const response = await api.get(`/publications/${id}`)
    return response.data
  } catch (err) {
    return rejectWithValue(err)
  }
})


export const slice = createSlice({
  name: 'publication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(publication.pending, (state, action) => {
      state.createPublication.status = 'loading'
    })
    .addCase(publication.fulfilled, (state, action) => {
      state.createPublication.status = 'succeeded'
    })
    .addCase(publication.rejected, (state, action) => {
      state.createPublication.status = 'failed'
    })
    .addCase(getPublications.fulfilled, (state, action) => {
      state.publications = action.payload
    })
    .addCase(getPublication.fulfilled, (state, action) => {
      state.viewPublication = action.payload
    })
  },
})

export const selectPublication = (state: IStatePublication) => state
export default slice.reducer