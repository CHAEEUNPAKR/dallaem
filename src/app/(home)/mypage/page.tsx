'use client';

import { useMyMeetings } from '@/hooks/customs/useMyMeetings';
import CardList from './components/CardList/CardList';

function MyPage() {
	const { meetings } = useMyMeetings('joined');
	return <CardList data={meetings || []} cardType='joined' />;
}

export default MyPage;
