import postgres from "postgres";


// export const sql = postgres(process.env.DATABASE_URL as string)
// const POSTGRES_USER="jpianbrbpkwihg"
// const POSTGRES_PWD='c58fd191c87003de8a7cc082e368d6a9eb235c0848b2ee62dec9b567b8567d4b'
// const POSTGRES_DB="dc25ccacrnme7k"
// const HOST="ec2-54-235-98-1.compute-1.amazonaws.com"
// const POSTGRES_URL=`postgres://${process.env.DB_USER as string}:${process.env.DB_PASSWORD as string}@${process.env.DB_HOST as string}:5432/${process.env.DB_NAME as string}?sslmode=disable`


// const POSTGRES_URL=`postgres://jpianbrbpkwihg:c58fd191c87003de8a7cc082e368d6a9eb235c0848b2ee62dec9b567b8567d4b@ec2-54-235-98-1.compute-1.amazonaws.com:5432/dc25ccacrnme7k?sslmode=disable`
// export const sql = postgres(POSTGRES_URL)
export const sql = postgres(process.env.DATABASE_URL as string,{ssl:{rejectUnauthorized:false}})

export async function testConnection(){
    try {
        const result = await sql`SELECT * FROM users LIMIT 2`
        console.log('database connected successfully', result)
        return 'database connected successfully'
    } catch (error) {
        console.error('database connection failed',error)
        // console.error(error)
        return error
        // process.exit(1)
    }
}


// import postgres from "postgres";

// // export const sql = postgres(process.env.DATABASE_URL as string)


// const POSTGRES_USER="postgres"
// const POSTGRES_PWD="secret"
// const POSTGRES_DB="logistics"
// const HOST="localhost"

// // const POSTGRES_USER="xmnivsknktmknv"
// // const POSTGRES_PWD="aaade190eeafe442d706f25bbfc57ca2c7224bbd4ecddfbeb09afb2b18f69f9e"
// // const POSTGRES_DB="ddb2cgl1rgnql9"
// // const HOST="ec2-3-226-165-146.compute-1.amazonaws.com"


// const POSTGRES_URL=`postgres://xmnivsknktmknv:aaade190eeafe442d706f25bbfc57ca2c7224bbd4ecddfbeb09afb2b18f69f9e@ec2-3-226-165-146.compute-1.amazonaws.com:5432/ddb2cgl1rgnql9?sslmode=disable`
// // const POSTGRES_URL=`postgres://${POSTGRES_USER}:${POSTGRES_PWD}@${HOST}:5432/${POSTGRES_DB}?sslmode=disable`
// export const sql = postgres(POSTGRES_URL,{ssl:{rejectUnauthorized:false}})

// export async function testConnection(){
//     try {
//         const result = await sql`SELECT * FROM users LIMIT 2`
//         console.log('database connected successfully', result)
//         return 'database connected successfully'
//     } catch (error) {
//         console.error('database connection failed',error)
//         // console.error(error)
//         return error
//         // process.exit(1)
//     }
// }
// testConnection()