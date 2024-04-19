export async function GET() {
  const res = await fetch('http://localhost/storage/profiles/01hvqf3adtctrw3nbsd0ak01jj/617c823a243c06508734fecafca1d9d7.jpg');

  const result = await res.blob();
  return Response.json({
    tes: 'opke'
  })
}
