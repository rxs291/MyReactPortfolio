



// this stuff code can hide continaers and show them on tab click 

const [activeElement, setActiveElement] = useState('');
const handleClick = (element) => {
  setActiveElement(element === activeElement ? '' : element);
  scrollToBottom();
};

// this will scrollToBottom when the use effect procs
useEffect(() => {
    scrollToBottom();
  }, [activeElement]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };


 
      <div className="col-6 d-flex justify-content-around container-fluid">
        <div onClick={() => handleClick('list1')}>
          <h3 >testing1</h3>

        </div>
        <div onClick={() => handleClick('list2')} >
          <h3>testing 2</h3>
        </div>
        <div onClick={() => handleClick('list3')}>
          <h3>testing 3 </h3>
        </div>
        <div onClick={() => handleClick('list4')}>
          <h3>testing 4 </h3>
        </div>
      </div>



`${activeElement === 'list1' ? 'list1' : ''}  hidden `

`${activeElement === 'list2' ? 'list2' : ''} hidden`

` hidden ${activeElement === 'list3' ? 'list3' : ''}`

`hidden ${activeElement === 'list4' ? 'list4' : ''}`


<div className="col-6 d-flex justify-content-around container-fluid">
<div onClick={() => handleClick('list1')}>
  <h3 >testing1</h3>

</div>
<div onClick={() => handleClick('list2')} >
  <h3>testing 2</h3>
</div>
<div onClick={() => handleClick('list3')}>
  <h3>testing 3 </h3>
</div>
<div onClick={() => handleClick('list4')}>
  <h3>testing 4 </h3>
</div>
</div>