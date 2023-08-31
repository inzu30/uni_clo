
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon ,MDBBtn,MDBInput} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <> 
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
    <MDBContainer className='p-4 pb-0'>
      <form action=''>
        <MDBRow>
          <MDBCol size='auto' className='mb-4 mb-md-0'>
            <p className='pt-2'>
              <p>We will keep you posted on great offers and new products</p>
            </p>
          </MDBCol>
          <MDBCol size='3' className='mb-4 mb-md-0' >
            <MDBInput type='text' id='form5Example2' label='Email address' />
          </MDBCol>
          <MDBCol size='auto' className='mb-4 mb-md-0'>
            <MDBBtn><MDBIcon fas icon="chevron-right" /></MDBBtn>
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  </MDBFooter>
  <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              Help
            </h6>
            <p>
            <a href='#!' className='text-reset'>
            FAQS
              </a>
            </p>
            <p>
            <a href='#!' className='text-reset'>
            Shipping
              </a>
            </p>
            <p>
            <a href='#!' className='text-reset'>
            Returns
              </a>
            </p>
            <p>
            <a href='#!' className='text-reset'>
            Size Guides
              </a>
            </p>
            <p>
            <a href='#!' className='text-reset'>
            Contact Us
              </a>
            </p>
            <p>
            <a href='#!' className='text-reset'>
            Find a Store
              </a>
            </p>
          </MDBCol>

          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Legal</h6>
            <p>
              <a href='#!' className='text-reset'>
              Terms and Conditions
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Privacy Policy
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Our Cookie Policy
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Accessibility Policy
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
              Carbon Neutrality Statement
              </a>
            </p>
            {/* <p>
              <a href='#!' className='text-reset'>
              Ethical Trading Statement
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
              Modern Slavery Statement
              </a>
            </p> */}
          </MDBCol>

          <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>More Info</h6>
            <p>
              <a href='#!' className='text-reset'>
                About Us
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Custom Shirts
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Gift Vouchers
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
              Affiliate Programme  
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
              Wholesale Partnerships
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
              Request a Catalogue 
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
              Doing Things Properly
              </a>
            </p>
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Careers</h6>
            <p>
              <MDBIcon color='secondary'  className='text-reset'  />
              IND Vacancies
            </p>
            <p>
              <MDBIcon color='secondary'  className='text-reset' />
              Our Beliefs
            </p>
            <p>
              <MDBIcon color='secondary'  className='text-reset' />Our Benefits
            </p>
            <p>
              <MDBIcon color='secondary' className='text-reset' />Our People
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

   
  </MDBFooter></>
   
  );
}