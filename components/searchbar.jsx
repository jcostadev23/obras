const [people, setPeople] = useState([])
useEffect(() => {
    async function chamarpessoas() {
        try {

            const peopledainternet = await DataStore.query(People, c => c.name.contains("costa"));
            setPeople(peopledainternet)

            console.log("Posts retrieved successfully!", JSON.stringify(peopledainternet, null, 2));
        } catch (error) {
            pessoasearch,
                console.log("Error retrieving posts", error);
        }
    }

    return
    <Grid>
        {people.map((user) => {
            return (
                <Card variation="elevated" key={user.id}>
                    <Heading level={4}>{user.name}</Heading>
                    <div>{user.phonenumber}</div>
                    <div>{user.role}</div>
                </Card>
            )
        })}
    </Grid>

}, [])


