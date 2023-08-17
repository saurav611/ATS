import Navbar from '@/components/Common/Navbar';
// import CandidateForm from '@/components/Pages/jobs/CandidateForm';
import CandidateInfo from '@/components/Jobs/CandidateInfo';
// import Attachments from '@/components/Pages/jobs/Attachments';
// import CandidateHeader from '@/components/Pages/jobs/CandidateHeader';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen ">
      <Navbar customClass={'mt-7'} />
      {/* <CandidateForm customClass="mt-7" /> */}
      <CandidateInfo
        CustomClass="mt-7"
        CandidateName={'Saurav '}
        age={23}
        Gender={'Male'}
        CandidateLastname={'Gupta'}
        Email={'Saurav.guptarap@gmail.com'}
        Location={'kanput'}
        MobNumber={'9305973143'}
        Imagesrc="/candidateIcon/Photo.svg"
        Experience="1 year 4 months"
        Skills={['React js']}
      />
      {/* <Attachments CustomClass="mt-7" /> */}
      {/* <CandidateHeader customClass="mt-4" /> */}
    </main>
  );
}
