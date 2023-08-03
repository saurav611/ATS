// import Navbar from '@/components/Common/Navbar';
// import JobCard from '@/components/Jobs/JobCard';
// import JobForm from '@/components/Jobs/JobForm';
import CandidateInfo from '@/components/Jobs/CandidateInfo';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen ">
      {/* <Navbar customClass={'mt-7 '} /> */}
      {/* <JobCard
        customClass={'laptop:mt-7  '}
        heading="UX Designer"
        totalCandidates={20}
        activeCandidates={12}
        JobId={2223}
        Location="Delhi NCR"
        JobType="Full time"
      /> */}
      {/* <JobForm customClass={'mt-9'} /> */}
      <CandidateInfo
        CustomClass="mt-7"
        Imagesrc={`CandidateIcon/Photo.svg`}
        CandidateName="Monica"
        CandidateLastname="Gupta"
        age={22}
        Gender="Female"
        Email="Saurav.guptarap@gmail.com"
        Location="Shayam Nagar"
        MobNumber="93059741443"
        Skills={['react js']}
        Experience="1 year 6 months"
      />
    </main>
  );
}
