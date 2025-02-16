import Link from 'next/link';
import ProfileIcon from '../ProfileIcon/ProfileIcon';

function ProfileHeader() {
	return (
		<section className='border border-2 border-gray-200 rounded-3xl overflow-hidden'>
			<div className='bg-orange-400 flex items-center justify-between pl-6 pr-4 py-4'>
				<h3 className='pb-2 text-lg font-semibold'>내 프로필</h3>
				<Link href={'/mypage/my-profile'}>
					<ProfileIcon.Pencil size='large' />
				</Link>
			</div>
			<span className='relative block h-[2px] bg-orange-600 bottom-2'>
				<img
					src='/images/profile/profileBg.png'
					className='absolute bottom-0 h-[47.66px] right-[70px] md:right-[155px]'
				/>
			</span>
			<div className='bg-white flex pl-4 gap-2'>
				<div>
					<ProfileIcon.Avatar size='small' className='relative bottom-5' />
				</div>
				<div className='pb-5 flex flex-col gap-2'>
					<strong>사용자 이름</strong>
					<dl className='grid grid-cols-[max-content_auto] gap-x-4 gap-y-1 items-center'>
						<dt className='after:content-["."] text-sm font-medium'>company</dt>
						<dd>코드잇</dd>
						<dt className='after:content-["."] text-sm font-medium'>E-mail</dt>
						<dd>@codeit.com</dd>
					</dl>
				</div>
			</div>
		</section>
	);
}

export default ProfileHeader;
