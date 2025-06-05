
import 'dotenv/config';
import process from 'process'
import axios from 'axios';

const BASE_URL = "https://sandbox.alloy.co/v1"
const token = process.env.ALLOY_TOKEN;
const secret = process.env.ALLOY_SECRET;

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
    {...applicant, name_last: "Kang"},
    {...applicant, name_last: "Review"},
    {...applicant, name_last: "Deny"}
]

async function postEval(person) {
    try {
        const resp = await axios.post(
            `${BASE_URL}/evaluations`,
            person,
            { 
                auth: {username: token, password: secret},
                headers: {
                    "Content-Type": "application/json",
                }
            
            }
        );
    console.log(resp.data, 'data')

    const result = resp.data?.summary?.outcome;
    console.log(result, 'result')

    if (result == "Approved") { 
        console.log("Congratulations! You are approved");
    } else if (result == "Manual Review") {
        console.log("Your application is under review. Please wait for further updates")
    } else if (result == "Denied") { //the outcome is Denied for "Deny" name
        console.log("Unfortunately, we cannot approve your application at this time.")
    } else {
        console.log("unknown error", resp.data, "outcome", result)
    }
    }
    catch (err) {
    console.log(err, 'err')
    }
}

async function sandboxPersonas() {
    console.log(personas,'personas') 
    for(const person of personas) { //iterate through personas with different last names to coerce a different response.
        await postEval(person) //each persona goes through with an evaulation
    }
}

sandboxPersonas();
