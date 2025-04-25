
import 'dotenv/config';
import process from 'process'
import axios from 'axios';

const BASE_URL = "https://sandbox.alloy.co/v1"
const token = process.env.DAIN_TOKEN;
const secret = process.env.DAIN_SECRET;

const applicant = {
    name_first: "Dain",
    name_last: "Kang",
    birth_date: "1990-09-29",
    document_ssn: "123456789",
    email_address: "dain.kang@alloy.com",
    address_line_1: "2929 Wall st",
    address_line_2: "Apt 1A",
    address_city: "New York",
    address_state: "NY",
    address_postal_code: "10022",
    address_country_code: "US",
}

const personas = [
    {...applicant, name_last: "Smith"}
    {...applicant, name_last: "Review"}
    {...applicant, name_last: "Deny"}
]

async function getParameters() {
    try {
        const resp = await axios.get(
            `${BASE_URL}/parameters`,
            { auth: {username: token, password: secret} }
        )
        console.log(resp.data.required, 'data')
    } catch (err) {
        console.log(err, 'err')
    }
}

  getParameters();