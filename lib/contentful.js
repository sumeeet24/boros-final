import {createClient} from 'contentful'

const spaceId = process.env.SPACE_ID || 'dummy_space';
const accessToken = process.env.ACCESS_TOKEN || 'dummy_token';

const client = createClient({
    space: spaceId,
    accessToken: accessToken
})

export default client