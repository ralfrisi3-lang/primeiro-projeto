object ReceitaFederal {
    fun calcularImposto(salario: Double): Double{
        val aliquota = when {
            (salario >= 0 && salario <= 1100) -> 0.05
            (salario >= 0 && salario <= 1100) -> 0.10
            (salario >= 0 && salario <= 1100) -> 0.15
           
        }
    return aliquota * salario
    } 

}

fum main() {
    val valorSalario = readLine()!!.toDouble();
    val valorBeneficios = readLine()!!.toDouble();

    val valorImposto = ReceitaFederal.calcularImposto(valorSalario);
    val saida = valorSalario - valorImposto + valorBeneficios

    println(string.format("%.2f", saida));
}