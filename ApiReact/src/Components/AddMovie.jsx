import React, { useRef } from 'react';

function AddMovie(props) {
    const titleRef = useRef('');
    const directorRef = useRef('');
    const openingTextRef = useRef('');
    const releaseDateRef = useRef('');

    function submitHandler(event) {
        event.preventDefault();

        const movie = {
            title: titleRef.current.valueOf,
            director: directorRef.current.valueOf,
            openingText: openingTextRef.current.valueOf,
            releaseDate: releaseDateRef.current.valueOf,
        };

        props.onAddMovie(movie);

        // Clear input fields after submission
        titleRef.current.valueOf = '';
        directorRef.current.valueOf = '';
        openingTextRef.current.valueOf = '';
        releaseDateRef.current.valueOf = '';
    }

    return (
        <form className='w-full px-10' onSubmit={submitHandler}>
            <div className='text-black w-full'>
                <div className='flex justify-between w-full'>
                    <div className='pt-2 pb-3 w-1/2 mr-1' >
                        <label className='pb-2 flex justify-start font-bold text-lg' htmlFor="title">Movie Name : </label>
                        <input className='bg-slate-200 py-1 px-4 font-semibold text-lg border-2 border-black w-full rounded-xl' type="text" id="title" ref={titleRef} />
                    </div >
                    <div className='pt-2 pb-3 w-1/2 ml-1'>
                        <label className='pb-2 flex justify-start font-bold text-lg' htmlFor="director">Director Name : </label>
                        <input className='bg-slate-200 py-1 px-4 font-semibold text-lg border-2 border-black w-full rounded-xl' type="text" id="director" ref={directorRef} />
                    </div>
                </div>
                <div className='pb-3'>
                    <label className='pb-2 flex justify-start font-bold text-lg' htmlFor="openingText">Opening Text : </label>
                    <textarea rows={2} className='bg-slate-200 py-1 px-4 font-semibold text-lg border-2 border-black w-full rounded-xl' type="text" id="openingText" ref={openingTextRef} />
                </div>
                <div className='pb-3'>
                    <label className='pb-2 flex justify-start font-bold text-lg' htmlFor="releaseDate">Releasing Date : </label>
                    <input className='bg-slate-200 py-1 px-4 font-semibold text-md border-2 border-black w-full rounded-xl' type="text" id="releaseDate" ref={releaseDateRef} />
                </div>
                <div className='pb-2'>
                    <button className='rounded-xl bg-blue-600 text-white px-14 py-2 m-4' >Add Movie</button>
                </div>
            </div>
        </form>
    );
}

export default AddMovie;
