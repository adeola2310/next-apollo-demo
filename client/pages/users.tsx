import styled from '@emotion/styled'
import Button from '../components/Button/Button'
import UserCard from '../components/UserCard/UserCard'
import { useQuery } from '@apollo/client'
import SkeletonLoader from '../components/Skeleton/Skeleton'
import Errorboundary from './errorboundary'
import { ALL_USERS } from '../queries/getUsers'
import NoUser from '../components/NoUser/NoUser'
import { useEffect, useState } from 'react'

const Users = () => {
    const offset = 0;
    const [limit, setLimit] = useState<number>(20);
    const [usersList, setUsersList] = useState<[]>([]);
    const { loading, error, data } = useQuery(ALL_USERS);


    useEffect(() => {
        if(data){
            setUsersList(data?.users?.slice(offset, limit + offset));
        }
    }, [offset, limit, data])

    const loadMoreUsers = () => {
        setLimit(limit + 20);
    };

    if (loading) {
        return <SkeletonLoader />
    }
    if (error) {
        return <Errorboundary />
    }
    if (!data.users) {
        return <NoUser />
    }

    return (
        <>
            <Grid data-testid="user-grid">
                {
                    usersList?.map((user: any, i) => (
                        <UserCard key={i} user={user} />
                    ))
                }
            </Grid>
            <Button onClick={() => loadMoreUsers()} />
        </>
    )
}

export default Users

const Grid = styled.div`
display: grid;
grid-template-rows: auto;
grid-row-gap: 15px;
width: 60%;

@media screen and (max-width:680px){
  margin:auto;
  display: grid;
  grid-template-columns: repeat(1, 100%);
  width: 80%;
  font-size: var(--font-size-p-small);
}
`