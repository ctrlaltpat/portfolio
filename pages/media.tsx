import PageWrapper from '@/components/layout/pageWrapper';
import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Media: NextPage = () => {
  return (
    <Box>
      <PageWrapper title='Media'>
        <p>Notes, snippets, links etc.</p>
        <Box
          sx={{
            columnCount: [1, 2, 3, 4],
            columnGap: 2,
            rowGap: 2,
            counterReset: 'item-counter',
          }}
        >
          {testNotes.map((t, i) => (
            <Box
              key={i}
              borderRadius='.8rem'
              overflow={'hidden'}
              boxSizing={'border-box'}
              marginBottom={'.8rem'}
              sx={{
                WebkitBoxShadow:
                  '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
                boxShadow:
                  '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
                breakInside: 'avoid',
                counterIncrement: 'item-counter',
              }}
            >
              <span>i</span>
            </Box>
          ))}
        </Box>
      </PageWrapper>
    </Box>
  );
};

export default Media;

const testNotes = [
  `
  function deepIterator (target) {
    if (typeof target === 'object') {
      for (const key in target) {
        deepIterator(target[key]);
      }
    } else {
      console.log(target);
    }
  }
  `,
  `
  const deepMerge = (a, b, fn) =>
  [...new Set([...Object.keys(a), ...Object.keys(b)])].reduce(
    (acc, key) => ({ ...acc, [key]: fn(key, a[key], b[key]) }),
    {}
  );`,
  `def sort_array_asc(array)
  array.sort
end

def sort_array_desc(array)
array.sort do |a,b|
  b <=> a
end
end

def sort_array_char_count(array)
array.sort do |a,b|
  a.length <=> b.length
end
end`,
  `def swap_elements_from_to(array, index, destination_index)
array[index], array[destination_index] = array[destination_index], array[index]
array
end

def swap_elements(array)
swap_elements_from_to(array, 1,2)
end

def reverse_array(array)
array.reverse
end`,
  `.center {  
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
    text-align: center;
  }`,
  `LINE=1
   while read -r CURRENT_LINE
     do
       echo "$LINE: $CURRENT_LINE"
       ((LINE++))
   done < "./new-1.txt"`,
  `LINE=1
   while read -r CURRENT_LINE
     do
       echo "$LINE: $CURRENT_LINE"
       ((LINE++))
   done < "./new-1.txt"`,
  `LINE=1
   while read -r CURRENT_LINE
     do
       echo "$LINE: $CURRENT_LINE"
       ((LINE++))
   done < "./new-1.txt"`,
  `LINE=1
   while read -r CURRENT_LINE
     do
       echo "$LINE: $CURRENT_LINE"
       ((LINE++))
   done < "./new-1.txt"`,
  `LINE=1
   while read -r CURRENT_LINE
     do
       echo "$LINE: $CURRENT_LINE"
       ((LINE++))
   done < "./new-1.txt"`,
  `LINE=1
   while read -r CURRENT_LINE
     do
       echo "$LINE: $CURRENT_LINE"
       ((LINE++))
   done < "./new-1.txt"`,
  `LINE=1
   while read -r CURRENT_LINE
     do
       echo "$LINE: $CURRENT_LINE"
       ((LINE++))
   done < "./new-1.txt"`,
];
