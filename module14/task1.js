const parser = new DOMParser();

const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const xmlDOM =parser.parseFromString(xmlString, "text/xml");

let res = {
  list :[ ]
}

xmlDOM.querySelectorAll("student").forEach((student) => {
  const nameNode = student.querySelector("name");
  const ageNode = student.querySelector("age");
  const profNode = student.querySelector("prof");
  const langAttr = nameNode.getAttribute("lang");
  const fullname = nameNode.querySelector("first").textContent + " " 
                  + nameNode.querySelector("second").textContent;
  res.list.push(
    {
      name: fullname, 
      age: ageNode.textContent, 
      prof: profNode.textContent, 
      lang: langAttr
    }
  )
});


console.log(res);
