const SUPABASE_URL = "https://rdsfsbsmldptvthwcfjt.supabase.co";
const SUPABASE_KEY = "sb_publishable_lizp92ghUHOV1-fFzUEHVQ_XBHL3qjX";

const { createClient } = supabase;
const banco = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
const lista = document.getElementById("lista");
const form = document.getElementById("formChamado")
async function mostrarChamados(){
    const {data, error} = await banco.from("chamado").select("*");
    if(error){
        console.log(error);
        return;
    }
    data.forEach(chamado => {
        

    });
   
    


    }
form.addEventListener("submit", async function(event){
    event.preventDefault();
    const equipamento = document.getElementById("equipamento").value;
    const problema = document.getElementById("problema").value
    const descricao= document.getElementById("descricao").value;
    const prioridade= document.getElementById("prioridade").value;
   //banquinho de dadinhos 
   const { error } = await banco.from("chamado").insert({
    equipamento: equipamento,
    problema: problema,
    descricao: descricao,
    prioridade: prioridade
 });
 if(error){
    console.log(error);
    return;
 }
 alert("Chamado enviado com sucesso");
 form.reset();
 mostrarChamados();
})


    mostrarChamados();
