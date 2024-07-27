import News from '../News'
export default function News_pg(){
  return (
    <main>
       <div class="container">
          <div class="row g-4">
            <div class="col-lg-8">
              <div class="bg-mode p-4">
                <h1 class="h4 mb-4">Latest Newss</h1>
                <News />
                <News />
                <News />
                </div>
            </div>

          </div>
        </div>
    </main>
  );
};